import React from 'react'
import PageHeader from '../components/PageHeader'
import { Typography } from '@mui/material'

export default function About() {
    return (
        <>
            <PageHeader title={"About"} subTitle={"This is Our Story"} />
            <div style={{ display: 'flex', width: "700px", margin: '0 auto' }}>
                <Typography variant='body1' sx={{ fontFamily: "roboto" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et odit ipsa officiis dolor beatae veniam, iste vitae. Eum, iusto eius ab pariatur totam corporis vero voluptatem, quia ex necessitatibus illo aspernatur accusamus cum incidunt molestiae dicta odio illum quidem magnam eaque placeat rerum ipsam commodi similique. Enim expedita obcaecati, reiciendis amet beatae quia perferendis, quo tempora, hic nobis iusto repellendus facere accusamus laudantium quos praesentium cupiditate sint excepturi blanditiis minima esse consectetur illum veritatis? Expedita, corporis ipsa odit exercitationem inventore culpa quis. Consequatur deserunt rem beatae pariatur possimus repellendus harum esse. Mollitia facilis eos impedit dicta tempore, repudiandae temporibus et nobis! Commodi nesciunt illum blanditiis ducimus fuga quis alias optio eligendi. Nulla explicabo eum temporibus amet esse! Rem quasi dolorem molestiae amet voluptatum non!
                </Typography>
                <img src='/images/card.png' style={{ height: "350px" }} alt='card' />
            </div>
        </>
    )
}
