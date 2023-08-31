package com.example.protocol.dao.services;

import com.example.protocol.dao.repo.DivisionRepo;
import com.example.protocol.models.Division;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DivisionService implements CrudService<Division> {

    private DivisionRepo divisionRepo;

    @Autowired
    public DivisionService(DivisionRepo divisionRepo) {
        this.divisionRepo = divisionRepo;
    }

    @Override
    public void save(Division value) {
        divisionRepo.save(value);
    }

    @Override
    public void delete(Division value) {
        divisionRepo.delete(value);
    }

    @Override
    public void update(Division value) {
        divisionRepo.save(value);
    }

    @Override
    public Optional<Division> findById(int id) {
        return divisionRepo.findById(id);
    }

    @Override
    public List<Division> findAll() {
        return divisionRepo.findAll();
    }

    public void formDivisions() {

    }
}
