package com.example.protocol.dao.services;

import com.example.protocol.dao.repo.SportsmanRepo;
import com.example.protocol.entity.Gender;
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
        String temp1;
        if (value.getGender().equals(Gender.MALE)){
            temp1 = "Мужчины";
        } else {
            temp1 = "Женщины";
        }
        //проверяем, существует ли дивизион. ключ - название дивизиона, существует, пока существуют подходящие участники (значение)
        String tempDivisionName = value.getBowClass() + " - " + temp1;

        if(Sportsman.exampleDivisions.get(tempDivisionName)==1) {
            Sportsman.exampleDivisions.remove(tempDivisionName);
        } else{
            Sportsman.exampleDivisions.put(tempDivisionName, Sportsman.exampleDivisions.get(tempDivisionName)-1);
        }
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
