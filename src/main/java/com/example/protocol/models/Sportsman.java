package com.example.protocol.models;

import com.example.protocol.entity.BowClass;
import com.example.protocol.entity.Category;
import com.example.protocol.entity.Gender;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.TreeMap;

@Entity
@Table(name = "sportsman")
@NoArgsConstructor
//@AllArgsConstructor
@Getter
@Setter
public class Sportsman {

    public static TreeMap<String, Integer> exampleDivisions; //для хранения всевозможных названий дивизионов для дальнейшего их создания

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

    private Gender gender;

    private BowClass bowClass;

    //@Column(name = "category")
    private Category category;

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

    @ManyToOne
    @JsonIgnoreProperties({"sportsmen"})
    @JoinColumn(name = "shield_id")
    private Shield shield;

    @ManyToOne
    @JsonIgnoreProperties({"sportsmen"})
    @JoinColumn(name = "division_id")
    private Division division;

    @ManyToOne
    @JsonIgnoreProperties({"sportsmen"})
    @JoinColumn(name = "competition_id")
    private Competition competition;

    public static TreeMap<String, Integer> getExampleDivisions() {
        return exampleDivisions;
    }

    public static void setExampleDivisions(TreeMap<String, Integer> exampleDivisions) {
        Sportsman.exampleDivisions = exampleDivisions;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getFatherName() {
        return fatherName;
    }

    public void setFatherName(String fatherName) {
        this.fatherName = fatherName;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Gender getGender() {
        return gender;
    }

    public void setGender(Gender gender) {
        this.gender = gender;
    }

    public BowClass getBowClass() {
        return bowClass;
    }

    public void setBowClass(BowClass bowClass) {
        this.bowClass = bowClass;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getFederationMembership() {
        return federationMembership;
    }

    public void setFederationMembership(String federationMembership) {
        this.federationMembership = federationMembership;
    }

    public String getClub() {
        return club;
    }

    public void setClub(String club) {
        this.club = club;
    }

    public String getTelephoneNumber() {
        return telephoneNumber;
    }

    public void setTelephoneNumber(String telephoneNumber) {
        this.telephoneNumber = telephoneNumber;
    }

//    public int getCompetitionId() {
//        return competitionId;
//    }
//
//    public void setCompetitionId(int competitionId) {
//        this.competitionId = competitionId;
//    }

    public boolean isMark() {
        return isMark;
    }

    public void setMark(boolean mark) {
        isMark = mark;
    }

    public Shield getShield() {
        return shield;
    }

    public void setShield(Shield shield) {
        this.shield = shield;
    }

    public Division getDivision() {
        return division;
    }

    public void setDivision(Division division) {
        this.division = division;
    }

    public Competition getCompetition() {
        return competition;
    }

    public void setCompetition(Competition competition) {
        this.competition = competition;
    }

    public Sportsman(int id, String name, String surname, String fatherName, String date, Gender gender, BowClass bowClass, Category category, String region, String federationMembership, String club, String telephoneNumber, boolean isMark, Shield shield, Division division, Competition competition) {
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
