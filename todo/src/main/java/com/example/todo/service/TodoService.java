package com.example.todo.service;

import com.example.todo.model.Todo;
import com.example.todo.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {
    @Autowired
    private TodoRepository todoRepository;

    public List<Todo> findAll() {
        return todoRepository.findAll();
    }

    public Todo save(Todo todo) {
        return todoRepository.save(todo);
    }

    public void delete(Long id) {
        todoRepository.deleteById(id);
    }
    
}
//package com.example.todo.service;
//
//import com.example.todo.model.Todo;
//import com.example.todo.repository.TodoRepository;
//
//import jakarta.enterprise.context.ApplicationScoped;
//import jakarta.inject.Inject;
//import java.util.List;
//
//@ApplicationScoped
//public class TodoService {
//    @Inject
//    private TodoRepository todoRepository;
//
//    public List<Todo> findAll() {
//        return todoRepository.findAll();
//    }
//
//    public Todo save(Todo todo) {
//        return todoRepository.save(todo);
//    }
//
//    public void delete(Long id) {
//        todoRepository.delete(id);
//    }
//}
