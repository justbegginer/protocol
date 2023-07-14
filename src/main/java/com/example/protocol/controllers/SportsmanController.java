package com.example.protocol.controllers;

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

    @Autowired
    public SportsmanController(SportsmanService sportsmanService){
        this.sportsmanService = sportsmanService;
    }

    @GetMapping
    public String getAllCompetitions(Model model) { // информация о всех спортсменах
        model.addAttribute("sportsmans", sportsmanService.findAll());
        return "sportsman/all";
    }

    @GetMapping("/{id}") // информация о конкретном спортсменом
    public String getCompetition(Model model,
                                 @PathVariable("id") int id){
        model.addAttribute("sportsman", sportsmanService.findById(id));
        return "sportsman/get";
    }

    @GetMapping("/add_new") // страница с добавлением нового спортсмена
    public String pageToAddNew(Model model){
        model.addAttribute("sportsman", new Competition());
        return "sportsman/add";
    }

    @PostMapping // запрос на который надо перенаправиться после заполнения
    public String addToDb(@ModelAttribute("sportsman") Sportsman sportsman){
        sportsmanService.save(sportsman);
        return "redirect:/sportsman";
    }
}
