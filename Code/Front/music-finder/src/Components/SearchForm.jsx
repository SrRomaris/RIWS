import React,{useState} from 'react';
import {useForm} from 'react-hook-form';
import { Container, Row, Col, FormInput, Form, FormGroup,ButtonGroup,Button, FormCheckbox } from "shards-react";
import  "./SearchForm.css";

const SearchForm = ({onSubmit}) => {

    const {register, handleSubmit, errors} = useForm()
    return(
    <Container className="SearchFormContainer" >
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Row form>
                <Col ><FormGroup><label htmlFor="#artista">Artista</label><FormInput placeholder="Introduce el artista" name="artista" innerRef={register}/></FormGroup></Col>
                <Col ><label htmlFor="#artista">Titulo</label><FormInput placeholder="Introduce el titulo" name="titulo" innerRef={register}/></Col>
                <Col ><label htmlFor="#artista">Letras</label><FormInput placeholder="Introduce letras a buscar" name="clave" innerRef={register}/></Col>
            </Row>
            <Row><Col sm={{ size: 8, order: 2, offset: 5 }} ><ButtonGroup size="sm" className="mr-2"><Button theme="danger" type="reset" onClick={()=> onSubmit()}>Limpiar</Button><Button theme="dark" >Buscar</Button></ButtonGroup></Col></Row>
        </Form>
    </Container>
    )
}

export default SearchForm;