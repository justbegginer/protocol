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

@Entity
@Table(name = "sportsman")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Sportsman {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "surname")
    private String surname;

    private String fatherName;

    @Column(name = "date")
    private String date;

    private Gender gender;

    private BowClass bowClass;

    @Column(name = "category")
    private Category category;

    @Column(name = "region")
    private String region;

    private String federationMembership;

    @Column(name = "club")
    private String club;

    private String telephoneNumber;

    private int competitionId;

    @Column(name = "mark")
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

}
