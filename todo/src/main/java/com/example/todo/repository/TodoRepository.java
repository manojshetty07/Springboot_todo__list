package com.example.todo.repository;

import com.example.todo.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo, Long> {
}
//package com.example.todo.repository;
//
//import com.example.todo.model.Todo;
//
//import jakarta.persistence.EntityManager;
//import jakarta.persistence.PersistenceContext;
//import jakarta.transaction.Transactional;
//import java.util.List;
//
//public class TodoRepository {
//    @PersistenceContext
//    private EntityManager entityManager;
//
//    public List<Todo> findAll() {
//        return entityManager.createQuery("SELECT t FROM Todo t", Todo.class).getResultList();
//    }
//
//    @Transactional
//    public Todo save(Todo todo) {
//        entityManager.persist(todo);
//        return todo;
//    }
//
//    @Transactional
//    public void delete(Long id) {
//        Todo todo = entityManager.find(Todo.class, id);
//        if (todo != null) {
//            entityManager.remove(todo);
//        }
//    }
//}
