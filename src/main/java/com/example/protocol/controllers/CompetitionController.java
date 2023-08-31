package com.example.protocol.controllers;

import com.example.protocol.dao.services.CompetitionService;
import com.example.protocol.models.Competition;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/competition")
public class
CompetitionController {

    private final CompetitionService competitionService;

    @Autowired
    public CompetitionController(CompetitionService competitionService){
        this.competitionService = competitionService;
    }

    @GetMapping
    public String getAllCompetitions(Model model) { // информация о всех соревнованиях
        model.addAttribute("competitions", competitionService.findAll());
        return "competition/all";
    }

    @GetMapping("/{id}") // информация о конкретном соревновании
    public String getCompetition(Model model,
                                 @PathVariable("id") int id){
        model.addAttribute("competition", competitionService.findById(id));
        return "competition/get";
    }

    @GetMapping("/add_new") // страница с добавлением нового соревнования соревнования
    //TODO 1
    public String pageToAddNew(Model model){
        model.addAttribute("competition", new Competition());
        return "competition/index";
    }

    @PostMapping // запрос на который надо перенаправиться после заполнения
    public String addToDb(@ModelAttribute("competition") Competition competition){
        competitionService.save(competition);
        return "redirect:/sportsman/add_new";
    }
}
