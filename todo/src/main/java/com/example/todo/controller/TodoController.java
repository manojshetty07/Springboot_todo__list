package com.example.todo.controller;

import com.example.todo.model.Todo;
import com.example.todo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin

@RestController
@RequestMapping("/api/todos")
public class TodoController {
    @Autowired
    private TodoService todoService;

    @GetMapping
    public List<Todo> getAllTodos() {
        return todoService.findAll();
    }

    @PostMapping
    public Todo createTodo(@RequestBody Todo todo) {
    	System.out.println("Received Todo: " + todo);
        return todoService.save(todo);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable Long id) {
        todoService.delete(id);
        return ResponseEntity.noContent().build();
    }
   

}
//package com.example.todo.controller;
//
//import com.example.todo.model.Todo;
//import com.example.todo.service.TodoService;
//
//import jakarta.inject.Inject;
//import jakarta.ws.rs.*;
//import jakarta.ws.rs.core.MediaType;
//import jakarta.ws.rs.core.Response;
//import java.util.List;
//
//@Path("/api/todos")
//@Produces(MediaType.APPLICATION_JSON)
//@Consumes(MediaType.APPLICATION_JSON)
//public class TodoController {
//    @Inject
//    private TodoService todoService;
//
//    @GET
//    public List<Todo> getAllTodos() {
//        return todoService.findAll();
//    }
//
//    @POST
//    public Response createTodo(Todo todo) {
//        Todo createdTodo = todoService.save(todo);
//        return Response.status(Response.Status.CREATED).entity(createdTodo).build();
//    }
//
//    @DELETE
//    @Path("/{id}")
//    public Response deleteTodo(@PathParam("id") Long id) {
//        todoService.delete(id);
//        return Response.noContent().build();
//    }
//}
