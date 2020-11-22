package es.udc.muei.riws.musicSearch;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import es.udc.muei.riws.controllers.SongsController;

@SpringBootApplication(scanBasePackages={"es.udc.muei.riws.repositories","es.udc.muei.riws.controllers","es.udc.muei.riws.services"})

public class MusicSearchApplication {

	public static void main(String[] args) {
		SpringApplication.run(MusicSearchApplication.class, args);
	}

}
