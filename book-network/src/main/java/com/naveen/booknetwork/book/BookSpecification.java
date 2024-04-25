package com.naveen.booknetwork.book;

import org.springframework.data.jpa.domain.Specification;

public class BookSpecification {

    public static Specification<Book> withOwnerId(Integer ownerId) {
//        here we are compare the provided owner id with the owner id of the book
//        citeriaBuilder will be pointing to the Book so from root we will get its owner and from there
//        we will get its id and compare it with provided ownerId
        return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("owner").get("id"), ownerId);
    }
}
