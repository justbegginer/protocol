package com.example.protocol.dao.services;

import com.example.protocol.dao.repo.CompetitionRepo;
import com.example.protocol.models.Competition;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CompetitionService implements CrudService<Competition> {

    private CompetitionRepo competitionRepo;


    @Autowired
    public CompetitionService(CompetitionRepo competitionRepo) {
        this.competitionRepo = competitionRepo;
    }

    public void save(Competition competition){
        competitionRepo.save(competition);
    }

    public void update(Competition competition){
        competitionRepo.save(competition);
    }

    public void delete(Competition competition){
        competitionRepo.delete(competition);
    }

    public List<Competition> findAll(){
        return competitionRepo.findAll();
    }

    public Optional<Competition> findById(int id){
        return competitionRepo.findById(id);
    }
}
