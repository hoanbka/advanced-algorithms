def jumpingJimmy2(tower, power, poison, jumpHeight):
	totalHeight = 0
	tmp = 0

	for i in range(len(tower)):

		if tmp + tower[i] >= jumpHeight:

			if tmp + tower[i] == jumpHeight:
				totalHeight += tower[i]
				tmp = 0

				if i in power:
					jumpHeight +=1
				elif i in poison:
					jumpHeight -=1
			else:

				if i-1 in power:
					jumpHeight +=1
				elif i-1 in poison:
					jumpHeight-=1

				tmp = tower[i]
				if tmp > jumpHeight:
					break

				totalHeight += tower[i]
		else:

			tmp += tower[i]
			totalHeight += tower[i]
	return totalHeight


