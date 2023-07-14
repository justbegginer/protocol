package com.example.protocol.dao.services;

import java.util.List;
import java.util.Optional;

public interface CrudService<T> {

    void save(T value);

    void delete(T value);

    void update(T value);

    Optional<T> findById(int id);

    List<T> findAll();
}
