package com.example.protocol.controllers;

import com.example.protocol.dao.CompetitionDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/competition/")
public class CompetitionController {

    private final CompetitionDao competitionDao;

    @Autowired
    public CompetitionController(CompetitionDao competitionDao){
        this.competitionDao = competitionDao;
    }

    @GetMapping
    public String getAllCompetitions(Model model) {
        model.addAttribute("competitions", competitionDao.findAll());
        return "competition/all";
    }
}
