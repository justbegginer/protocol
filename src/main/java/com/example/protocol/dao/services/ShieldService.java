package com.example.protocol.dao.services;

import com.example.protocol.dao.repo.ShieldRepo;
import com.example.protocol.models.Shield;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ShieldService implements CrudService<Shield> {

    private ShieldRepo shieldRepo;

    @Autowired
    public ShieldService(ShieldRepo shieldRepo) {
        this.shieldRepo = shieldRepo;
    }

    @Override
    public void save(Shield value) {
        shieldRepo.save(value);
    }

    @Override
    public void delete(Shield value) {
        shieldRepo.delete(value);
    }

    @Override
    public void update(Shield value) {
        shieldRepo.save(value);
    }

    @Override
    public Optional<Shield> findById(int id) {
        return findById(id);
    }

    @Override
    public List<Shield> findAll() {
        return findAll();
    }
}
