package com.example.protocol.controllers;

import com.example.protocol.dao.services.DrawService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class DrawController {

    private DrawService drawService;

    @Autowired
    public DrawController(DrawService drawService) {
        this.drawService = drawService;
    }
    @GetMapping("/draw")
    // TODO 5
    public String draw(Model model) {
        // model.addAttribute("draw", drawService.findAll());
        return "competition/draw";
    }

    @GetMapping("/draw_table")
    // TODO 6
    public String drawTable(Model model) {
        // model.addAttribute("draw", drawService.findAll());
        return "competition/drawTable";
    }
}
