package com.sample.auction;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.sample.auction.exception.BidNotMetException;
import com.sample.auction.exception.ItemNotAvailableException;

@ControllerAdvice
public class GlobalExceptionController {
	@ExceptionHandler(value = BidNotMetException.class)
	public ResponseEntity<String> exception(BidNotMetException exception) {
		return new ResponseEntity<>(exception.getDescription(), HttpStatus.OK);
	}

	@ExceptionHandler(value = ItemNotAvailableException.class)
	public ResponseEntity<String> itemNotAvailableExceltion(ItemNotAvailableException exception) {
		return new ResponseEntity<>(exception.getDescription(), HttpStatus.OK);
	}
}