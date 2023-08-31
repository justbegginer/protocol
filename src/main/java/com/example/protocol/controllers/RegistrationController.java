package com.example.protocol.controllers;

import com.example.protocol.dao.services.SportsmanService;
import com.example.protocol.models.Competition;
import com.example.protocol.models.Sportsman;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class RegistrationController {

    private SportsmanService sportsmanService;

    @Autowired
    public RegistrationController(SportsmanService sportsmanService){
        this.sportsmanService = sportsmanService;
    }

    @GetMapping("/pre-registration") // страница с добавлением нового спортсмена
    //TODO 2
    public String pageToAddNew(Model model) {
        model.addAttribute("sportsman", new Competition());
        return "competition/pre-reg";
    }

    @PostMapping // запрос на который надо перенаправиться после заполнения
    public String addToDb(@ModelAttribute("sportsman") Sportsman sportsman) {
        sportsmanService.save(sportsman);
        return "redirect:/add_new";
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
