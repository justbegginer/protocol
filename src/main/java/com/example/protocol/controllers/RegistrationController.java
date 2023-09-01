package com.example.protocol.controllers;

import com.example.protocol.dao.services.CompetitionService;
import com.example.protocol.dao.services.SportsmanService;
import com.example.protocol.models.Competition;
import com.example.protocol.models.Sportsman;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/registration")
public class RegistrationController {

    public static class TableToSportsmanMapper{
        public static List<Sportsman> map(){
            List<Sportsman> list = new ArrayList<Sportsman>();
            return list;
        }
    }

    private SportsmanService sportsmanService;

    private CompetitionService competitionService;

    @Autowired
    public RegistrationController(SportsmanService sportsmanService,
                                  CompetitionService competitionService) {
        this.sportsmanService = sportsmanService;
        this.competitionService = competitionService;
    }

    @GetMapping ("/preliminary/{id}")// страница с добавлением нового спортсмена
    //TODO 2
    public String pageToAddNew(Model model, @PathVariable("id") int id) {
        model.addAttribute("sportsman", new Sportsman());
        model.addAttribute("competition", competitionService.findById(id).get());
        return "competition/pre-reg";
    }

    @PostMapping ("/preliminary/add_new/{id}")// запрос на который надо перенаправиться после заполнения
    public String addToDb(Model model,
                          @ModelAttribute("sportsman") Sportsman sportsman,
                          @PathVariable("id") int id) {
        sportsman.setCompetition(competitionService.findById(id).get());
        sportsmanService.save(sportsman);
        return String.format("redirect:/registration/preliminary/%d", id);
    }

    @PostMapping("/add-from-link")
    public String addFromLink(@ModelAttribute("url") String url){
        return null;
    }

    @GetMapping("/general/{id}")
    public String reg(Model model, @PathVariable("id") int id) {//TODO 3
        model.addAttribute("sportsmen", sportsmanService.findAllByCompetition(competitionService.findById(id).get()));
        return "competition/reg";
    }

    @PostMapping("/general")
    public String registrationConfirm() {
        // TODO генерация дивизионов
        return "redirect:/divisions";
    }

    @DeleteMapping("/general/{competition_id}/{id}")
    public String deleteSportsman(@PathVariable("id") int id, @PathVariable("competition_id") int competition_id) {
        sportsmanService.delete(sportsmanService.findById(id).get());
        return String.format("redirect:/general/%s", competition_id);
    }

    @PatchMapping("/general/{competition_id}/{id}")
    public String updateSportsman(@PathVariable("id") int id, @PathVariable("competition_id") int competition_id) {
        sportsmanService.save(sportsmanService.findById(id).get());
        return String.format("redirect:/general/%s", competition_id);
    }
}
