package app.seatsforplaces.repository;

import app.seatsforplaces.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
public interface UserRepository  extends JpaRepository<User,Long> {
    Optional<User> findByEmail(String email);
    boolean existsByEmail(String email);
    @Transactional
    @Modifying
    @Query("update User ear set ear.creationnum = ?1 where ear.id = ?2")
    void setnum(Integer num, Long id);


    @Transactional
    @Modifying
    @Query(value = "INSERT INTO public.user_events (user_id, event_id) VALUES (:user_id, :event_id)" , nativeQuery = true)
    void addData(@Param("user_id")long user_id, @Param("event_id") long event_id);



}
