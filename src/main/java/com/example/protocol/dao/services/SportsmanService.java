package com.example.protocol.dao.services;

import com.example.protocol.dao.repo.SportsmanRepo;
import com.example.protocol.models.Sportsman;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SportsmanService implements CrudService<Sportsman> {
    private SportsmanRepo sportsmanRepo;

    @Autowired
    public SportsmanService(SportsmanRepo sportsmanRepo){
        this.sportsmanRepo = sportsmanRepo;
    }


    @Override
    public void save(Sportsman value) {
        sportsmanRepo.save(value);
    }

    @Override
    public void delete(Sportsman value) {
        sportsmanRepo.delete(value);
    }

    @Override
    public void update(Sportsman value) {
        sportsmanRepo.save(value);
    }

    @Override
    public Optional<Sportsman> findById(int id) {
        return sportsmanRepo.findById(id);
    }

    @Override
    public List<Sportsman> findAll() {
        return sportsmanRepo.findAll();
    }
}
