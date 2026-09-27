import { PrismaClient, RoleType } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Starting development seeding...')

  // Clean up existing data
  await prisma.user.deleteMany()
  await prisma.department.deleteMany()
  await prisma.ward.deleteMany()
  await prisma.grievanceCategory.deleteMany()

  // Create Departments
  const waterDept = await prisma.department.create({
    data: { name: 'Water & Sanitation', description: 'Handles water supply and sewage issues' }
  })
  
  const roadDept = await prisma.department.create({
    data: { name: 'Public Works', description: 'Handles roads, bridges, and public infrastructure' }
  })

  // Create Wards
  const wardNorth = await prisma.ward.create({ data: { name: 'North Ward' } })
  const wardSouth = await prisma.ward.create({ data: { name: 'South Ward' } })

  // Create Categories
  const catPothole = await prisma.grievanceCategory.create({
    data: { name: 'Pothole', description: 'Deep holes in the road surface' }
  })
  const catWaterLeak = await prisma.grievanceCategory.create({
    data: { name: 'Water Leak', description: 'Burst pipes or continuous leaks' }
  })

  // Create SLAs
  await prisma.sLA.create({
    data: { durationHours: 72, categoryId: catPothole.id, departmentId: roadDept.id }
  })
  await prisma.sLA.create({
    data: { durationHours: 24, categoryId: catWaterLeak.id, departmentId: waterDept.id }
  })

  // Create Development Users
  await prisma.user.create({
    data: { email: 'admin@cityvoice.local', name: 'System Admin', role: RoleType.ADMIN }
  })
  await prisma.user.create({
    data: { email: 'supervisor@cityvoice.local', name: 'Road Supervisor', role: RoleType.SUPERVISOR }
  })
  await prisma.user.create({
    data: { email: 'officer@cityvoice.local', name: 'Field Officer', role: RoleType.DEPARTMENT_OFFICER }
  })
  await prisma.user.create({
    data: { email: 'citizen@example.com', name: 'John Doe', role: RoleType.CITIZEN }
  })

  console.log('Seeding finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
