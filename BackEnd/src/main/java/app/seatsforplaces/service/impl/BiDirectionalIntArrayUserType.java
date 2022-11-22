package app.seatsforplaces.service.impl;

import org.hibernate.HibernateException;
import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.usertype.UserType;

import java.io.Serializable;
import java.sql.*;

public class BiDirectionalIntArrayUserType implements UserType {

    private final int[] arrayTypes = new int[]{Types.ARRAY};

    @Override
    public int[] sqlTypes() {
        return arrayTypes;
    }

    @Override
    public Class<int[][]> returnedClass() {
        return int[][].class;
    }

    @Override
    public boolean equals(Object x, Object y) throws HibernateException {
        return x == null ? y == null : x.equals(y);
    }

    @Override
    public int hashCode(Object x) throws HibernateException {
        return x == null ? 0 : x.hashCode();
    }

    @Override
    public Object nullSafeGet(ResultSet rs, String[] names, SharedSessionContractImplementor session, Object owner)
            throws HibernateException, SQLException {
        if (names != null && names.length > 0 && rs != null && rs.getArray(names[0]) != null) {
            Object array = rs.getArray(names[0]).getArray();
            if (array instanceof int[][])
                return array;
            else
                return convertShortArrayToInt((Number[][]) array);
        }

        return null;
    }

    private int[][] convertShortArrayToInt(Number[][] array) {
        int[][] intArray = new int[array.length][array[0].length];
        for (int i = 0; i < array.length; i++)
            for(int j = 0; j < array[0].length; j++)
                intArray[i][j] = array[i][j].intValue();

        return intArray;
    }

    @Override
    public void nullSafeSet(PreparedStatement st, Object value, int index, SharedSessionContractImplementor session)
            throws HibernateException, SQLException {
        if (value != null && st != null) {
            int[][] intarray = (int[][]) value;
            Array array = session.connection().createArrayOf("integer", intarray);
            st.setArray(index, array);
        } else {
            st.setNull(index, arrayTypes[0]);
        }
    }

    @Override
    public Object deepCopy(Object value) throws HibernateException {
        if (value == null)
            return null;

        int[][] intarray = (int[][]) value;
        int[][] clone = new int[intarray.length][intarray[0].length];
        for (int i = 0; i < intarray.length; i++)
            for(int j = 0; j < intarray[0].length; j++)
                clone[i][j] = intarray[i][j];

        return clone;
    }

    @Override
    public boolean isMutable() {
        return false;
    }

    @Override
    public Serializable disassemble(Object value) throws HibernateException {
        return (Serializable) value;
    }

    @Override
    public Object assemble(Serializable cached, Object owner) throws HibernateException {
        return cached;
    }

    @Override
    public Object replace(Object original, Object target, Object owner) throws HibernateException {
        return original;
    }

}
