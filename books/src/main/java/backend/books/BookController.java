package backend.books;

import jakarta.validation.Valid;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@CrossOrigin
@RestController
@RequestMapping("/api/books")
public class BookController {

  @Autowired
  private BookRepository bookRepository;

  @GetMapping
  public List<Book> getBooks() {
    return bookRepository.findAll();
  }

  @PostMapping
  public Book createBook(@Valid @RequestBody Book book) {
    Book newBook = new Book();
    newBook.setTitle(book.getTitle());
    return bookRepository.save(newBook);
  }

  @PutMapping("/{id}")
  public Book updateBook(@Valid @RequestBody Book book, @PathVariable Integer id) {
    Book bookToUpdate = bookRepository.findById(id).orElseThrow(() -> new ResponseStatusException(
        HttpStatus.NOT_FOUND));
    bookToUpdate.setTitle(book.getTitle());
    return bookRepository.save(bookToUpdate);
  }

  @DeleteMapping("/{id}")
  public void deleteBook(@PathVariable Integer id) {
    Book bookToDelete = bookRepository.findById(id).orElseThrow(() -> new ResponseStatusException(
        HttpStatus.NOT_FOUND));
    bookRepository.delete(bookToDelete);
  }
}
