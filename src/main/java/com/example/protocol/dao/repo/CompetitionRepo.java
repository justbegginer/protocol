package com.example.protocol.dao.repo;


import com.example.protocol.models.Competition;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompetitionRepo extends JpaRepository<Competition, Integer> {
}
