package com.example.protocol.controllers;

import com.example.protocol.dao.services.DivisionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/division")
public class DivisionController {

    private DivisionService divisionService;

    @Autowired
    public DivisionController(DivisionService divisionService) {
        this.divisionService = divisionService;
    }

    @GetMapping("/divisions")
    //TODO 4
    public String divisions(Model model) {
        model.addAttribute("divisions", divisionService.findAll());
        return "competition/divisions";
    }
}
