package com.example.protocol.models;

import com.example.protocol.entity.ShieldIndex;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "shield")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Shield {

    @Id
    private long id;
    @Column(name = "number")
    private int number;
    @Column(name = "index")
    private ShieldIndex index;

    @JsonIgnoreProperties({"shield"})
    @OneToMany(mappedBy = "shield")
    private List<Sportsman> sportsmen;

}
