package com.example.protocol.controllers;

import com.example.protocol.dao.services.CompetitionService;
import com.example.protocol.dao.services.SportsmanService;
import com.example.protocol.models.Competition;
import com.example.protocol.models.Sportsman;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/pre-registration")
public class RegistrationController {

    private SportsmanService sportsmanService;

    private CompetitionService competitionService;

    @Autowired
    public RegistrationController(SportsmanService sportsmanService,
                                  CompetitionService competitionService) {
        this.sportsmanService = sportsmanService;
        this.competitionService = competitionService;
    }

    @GetMapping ("/{id}")// страница с добавлением нового спортсмена
    //TODO 2
    public String pageToAddNew(Model model, @PathVariable("id") int id) {
        Sportsman sportsman = new Sportsman();
        sportsman.setCompetition(competitionService.findById(id).get());
        model.addAttribute("sportsman", sportsman);
        return "competition/pre-reg";
    }

    @PostMapping // запрос на который надо перенаправиться после заполнения
    public String addToDb(Model model,
                          @ModelAttribute("sportsman") Sportsman sportsman) {
        sportsmanService.save(sportsman);
        return String.format("redirect:/pre-registration/%d", sportsman.getCompetition().getId());
    }

    @GetMapping("/registration")
    public String reg(Model model) {//TODO 3
        // TODO надо вывести спортсменов сугубо этого соревнования, а не всех
        model.addAttribute("sportsmen", sportsmanService.findAll());
        return "competition/reg";
    }

    @PostMapping("/registration")
    public String registrationConfirm() {
        // TODO генерация дивизионов
        return "redirect:/divisions";
    }
}
