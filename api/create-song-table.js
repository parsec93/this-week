import { sql } from '@vercel/postgres';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
){
  try{
    const result = await sql'CREATE TABLE Songs (Number varchar(255), Name varchar(255), Link varchar(255), File varchar(255) );';
    return response.status(200).json({result});
  } catch (error){
    return response.status(500).jsoin({error});
  }
}
