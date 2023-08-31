package com.example.protocol.dao.repo;


import com.example.protocol.models.Sportsman;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SportsmanRepo extends JpaRepository<Sportsman, Integer> {

//    @Query("SELECT (surname||' '|| name) AS surname_name, date, category, (region||', '|| club) AS region_club FROM sportsman;")
//    List<Sportsman> getSportsmen(); // surname_name | date | category | region_club

}
