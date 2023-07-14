package com.example.protocol.models;

import jakarta.annotation.security.DenyAll;
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

    private String name;

    private String surname;

    private String fatherName;

    private String date;

    private String gender;

    private String bowClass;

    private String category;

    private String region;

    private String federationMembership;

    private String club;

    private String telephoneNumber;

    private int competitionId;
}
