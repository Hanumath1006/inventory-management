'use client'
import { firestore } from '@/firebase';
import { Box, Typography } from '@mui/material';
import { collection, getDocs, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';




export default function Home() {
  const[inventory, setInventory] = useState([])
  const [open, setOpen] = useState([])
  const [itemName, setItemName] = useState('')

  const updateInventory = async () => {
    const snapshot = query(collection(firestore, 'inventory'))
    const docs = await getDocs(snapshot)
    const inventoryList = []
    docs.forEach((doc) => {
      inventoryList.push({
        name: doc.id,
        ...doc.data(),
      })
    })
    setInventoryList(inventoryList)
  }

  const addItem = async (item) => {
    const docRef = doc(collection(firestore, 'inventory'), item)
    const docSnap = await getDoc(docRef)

    if(docSnap.exists()) {
      const quantity = docSnap.data()
      await setDoc(docRef, {quantity: quantity -1})
    } else {
      await setDoc(docRef, {quantity: 1})
    }


    await updateInventory()
  }


  useEffect(() => {
    updateInventory()
}, [])

const handleOpen = () => setOpen(true)
const handleClose = () => setClose(false) 


  
  return(
    <Box>
      <Typography variant ="h1">Inventory Management</Typography>
      {inventory.forEach((item) => {
        console.log(item)
        return (
        <> 
          {item.name}
          {item.count}
        </>
      )
      })}
    </Box>
  )
}
