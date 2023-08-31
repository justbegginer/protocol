package com.example.protocol.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "division")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Results {
    @Id
    private int id;
    private int numberOfDistances;

}
