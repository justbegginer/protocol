package com.example.protocol.dao.repo;


import com.example.protocol.models.Sportsman;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SportsmanRepo extends JpaRepository<Sportsman, Integer> {
}
