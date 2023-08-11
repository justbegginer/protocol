package com.example.protocol.dao.repo;

import com.example.protocol.models.Shield;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShieldRepo extends JpaRepository<Shield, Integer> {
}
