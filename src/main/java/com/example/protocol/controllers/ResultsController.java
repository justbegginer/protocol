package com.example.protocol.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class ResultsController {
    @GetMapping("/intermediate_results")
    // TODO 7
    public String intermediateResults(Model model) {
        return "competition/intermediateResult";
    }

    @GetMapping("/intermediate_results_table")
    // TODO 8
    public String intermediateResultsTable(Model model) {
        return "competition/intermediateResultTable";
    }
}
