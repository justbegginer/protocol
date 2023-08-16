package com.example.protocol.controllers;

import com.example.protocol.dao.services.DivisionService;
import com.example.protocol.dao.services.SportsmanService;
import com.example.protocol.models.Competition;
import com.example.protocol.models.Sportsman;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/sportsman")
public class SportsmanController {
    private SportsmanService sportsmanService;

    private DivisionService divisionService;

    @Autowired
    public SportsmanController(SportsmanService sportsmanService, DivisionService divisionService) {
        this.sportsmanService = sportsmanService;
        this.divisionService = divisionService;
    }

    @GetMapping
    public String getAllCompetitions(Model model) { // информация о всех спортсменах
        model.addAttribute("sportsmans", sportsmanService.findAll());
        return "sportsman/all";
    }

    @GetMapping("/{id}") // информация о конкретном спортсменом
    public String getCompetition(Model model,
                                 @PathVariable("id") int id) {
        model.addAttribute("sportsman", sportsmanService.findById(id));
        return "sportsman/get";
    }

    @DeleteMapping("/{id}")
    public String deleteSportsman(@PathVariable("id") int id) {
        sportsmanService.delete(sportsmanService.findById(id).get());
        return "redirect:/sportsman/registration";
    }
}
