package es.udc.muei.riws.entities;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;
import org.springframework.data.elasticsearch.annotations.Setting;

@Document(indexName = "songs")
public class Song {
	@Id
	private  String id;
	private  String title;
	private  String artistImage;
	private  String relevance;
	private  String artist;
	private  String lyrics;
	
	public Song(String id, String title, String artistImage, String relevance, String artist, String lyrics) {
		super();
		this.id = id;
		this.title = title;
		this.artistImage = artistImage;
		this.relevance = relevance;
		this.artist = artist;
		this.lyrics = lyrics;
	}
	
	public Song() {
		
	}
	
	public String getId() {
		return id;
	}
	public String getTitle() {
		
		return title!=null ? title : "";
	}
	public String getArtistImage() {
		
		return artistImage!=null ? artistImage : "";
	}
	public String getRelevancy() {
		return relevance!=null ? relevance : "";
	}
	public String getArtist() {
		return artist!=null ? artist : "";
	}
	public String getLyrics() {
		return lyrics!=null ? lyrics : "";
	}

	public void setId(String id) {
		this.id = id;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public void setArtistImage(String artistImage) {
		this.artistImage = artistImage;
	}

	public void setRelevancy(String relevancy) {
		this.relevance = relevancy;
	}

	public void setArtist(String artist) {
		this.artist = artist;
	}

	public void setLyrics(String lyrics) {
		this.lyrics = lyrics;
	}
	

}
