package com.example.protocol.models;

import com.example.protocol.entity.BowClass;
import com.example.protocol.entity.Category;
import com.example.protocol.entity.Gender;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;

import java.util.TreeMap;

@Entity
@Table(name = "sportsman")
@NoArgsConstructor
//@AllArgsConstructor
@Getter
@Setter
@ToString
public class Sportsman {

    public static TreeMap<String, Integer> exampleDivisions = new TreeMap<>(); //для хранения всевозможных названий дивизионов для дальнейшего их создания

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    //@Column(name = "name")
    private String name;

    //@Column(name = "surname")
    private String surname;

    private String fatherName;

    //@Column(name = "date")
    private String date;

    private String gender;

    private String bowClass;

    //@Column(name = "category")
    private String category;

    //@Column(name = "region")
    private String region;

    private String federationMembership;

    //@Column(name = "club")
    private String club;

    private String telephoneNumber;

//    @Column(name = "competition_id")
//    private int competitionId;

    //@Column(name = "mark")
    private boolean isMark;

    @ManyToOne(cascade = CascadeType.ALL)
    @JsonIgnoreProperties({"sportsmen"})
    @JoinColumn(name = "shield_id")
    private Shield shield;

    @ManyToOne(cascade = CascadeType.ALL)
    @JsonIgnoreProperties({"sportsmen"})
    @JoinColumn(name = "division_id")
    private Division division;

    @ManyToOne(cascade = CascadeType.ALL)
    @JsonIgnoreProperties({"sportsmen"})
    @JoinColumn(name = "competition_id")
    private Competition competition;

    public static TreeMap<String, Integer> getExampleDivisions() {
        return exampleDivisions;
    }

    public static void setExampleDivisions(TreeMap<String, Integer> exampleDivisions) {
        Sportsman.exampleDivisions = exampleDivisions;
    }



    public Sportsman(int id, String name, String surname, String fatherName, String date, String gender, String bowClass, String category, String region, String federationMembership, String club, String telephoneNumber, boolean isMark, Shield shield, Division division, Competition competition) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.fatherName = fatherName;
        this.date = date;
        this.gender = gender;
        this.bowClass = bowClass;
        this.category = category;
        this.region = region;
        this.federationMembership = federationMembership;
        this.club = club;
        this.telephoneNumber = telephoneNumber;
        // this.competitionId = competitionId;
        this.isMark = isMark;
        this.shield = shield;
        this.division = division;
        this.competition = competition;

        //определяем гендер для формирования названия дивизиона
        String temp1;
        if (gender.equals(Gender.MALE)){
            temp1 = "Мужчины";
        } else {
            temp1 = "Женщины";
        }
        //проверяем, существует ли дивизион. ключ - название дивизиона, существует, пока существуют подходящие участники (значение)
        String tempDivisionName = BowClass.AA + " - " + temp1;

        if (exampleDivisions.containsKey(tempDivisionName)) {
            exampleDivisions.put(tempDivisionName, exampleDivisions.get(tempDivisionName).intValue()+1);
        } else {
            exampleDivisions.put(tempDivisionName, 1);
        }
    }
}
