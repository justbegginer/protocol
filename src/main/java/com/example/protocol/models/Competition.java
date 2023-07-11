package com.example.protocol.models;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Competition {
    private int id;

    private String name;

    private String place;

    private String date;

    private String logoName;
}
