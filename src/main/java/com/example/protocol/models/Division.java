package com.example.protocol.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "division")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Division {

    @Id
    private Long id;
    //@Column(name = "name")
    private String name;
    //@Column(name = "fullness")
    private int fullness;

    @JsonIgnoreProperties({"division"})
    @OneToMany(mappedBy = "division")
    private List<Sportsman> sportsmen;


}
