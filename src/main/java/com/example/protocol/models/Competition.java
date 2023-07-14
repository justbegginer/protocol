package com.example.protocol.models;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table(name = "competition")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Competition {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    private String place;

    private String date;

    @Column(name = "logo_name")
    private String logoName;
}
