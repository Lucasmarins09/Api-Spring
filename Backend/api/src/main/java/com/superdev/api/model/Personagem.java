package com.superdev.api.model;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Builder

public class Personagem {

    private int id;
    private String nome;
    private boolean isVivo;
    private String universo;
    private String raca;




}

