package com.example.protocol.dao.repo;

import com.example.protocol.models.Division;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DivisionRepo extends JpaRepository<Division, Integer> {
}
