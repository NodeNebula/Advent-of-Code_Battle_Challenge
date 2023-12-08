def inSeedRange(seed):
    for ranges in seedInfo:
        if ranges[0] <= seed <= ranges[1]:
            return True


searching = {"sts": False, "stf": False, "ftw": False, "wtl": False, "ltt": False, "tth": False, "htl": False}

seedInfo = []
sts, stf, ftw, wtl, ltt, tth, htl = [], [], [], [], [], [], []

with open("test.txt") as file:
    for line in file:
        if "seeds:" in line:
            seeds = line.split(":")[1].strip(" ").strip("\n").split(" ")
            for info in range(len(seeds)):
                if info % 2 != 0:
                    continue
                else:
                    seedInfo.append([int(seeds[info]), int(seeds[info]) + int(seeds[info + 1])])

        elif "seed-to-soil map:" in line or searching["sts"]:
            if line.startswith("\n"):
                searching["sts"] = False
                continue
            if searching["sts"]:
                current = line.strip("\n").split(" ")
                sts.append([
                    str(int(current[0]) - int(current[1])),
                    [current[1], str(int(current[1]) + int(current[2]) - 1)]
                ])
            if not searching["sts"]:
                searching["sts"] = True

        elif "soil-to-fertilizer map:" in line or searching["stf"]:
            if line.startswith("\n"):
                searching["stf"] = False
                continue
            if searching["stf"]:
                current = line.strip("\n").split(" ")
                stf.append([
                    str(int(current[0]) - int(current[1])),
                    [current[1], str(int(current[1]) + int(current[2]) - 1)]
                ])
            if not searching["stf"]:
                searching["stf"] = True

        elif "fertilizer-to-water map:" in line or searching["ftw"]:
            if line.startswith("\n"):
                searching["ftw"] = False
                continue
            if searching["ftw"]:
                current = line.strip("\n").split(" ")
                ftw.append([
                    str(int(current[0]) - int(current[1])),
                    [current[1], str(int(current[1]) + int(current[2]) - 1)]
                ])
            if not searching["ftw"]:
                searching["ftw"] = True

        elif "water-to-light map:" in line or searching["wtl"]:
            if line.startswith("\n"):
                searching["wtl"] = False
                continue
            if searching["wtl"]:
                current = line.strip("\n").split(" ")
                wtl.append([
                    str(int(current[0]) - int(current[1])),
                    [current[1], str(int(current[1]) + int(current[2]) - 1)]
                ])
            if not searching["wtl"]:
                searching["wtl"] = True

        elif "light-to-temperature map:" in line or searching["ltt"]:
            if line.startswith("\n"):
                searching["ltt"] = False
                continue
            if searching["ltt"]:
                current = line.strip("\n").split(" ")
                ltt.append([
                    str(int(current[0]) - int(current[1])),
                    [current[1], str(int(current[1]) + int(current[2]) - 1)]
                ])
            if not searching["ltt"]:
                searching["ltt"] = True

        elif "temperature-to-humidity map:" in line or searching["tth"]:
            if line.startswith("\n"):
                searching["tth"] = False
                continue
            if searching["tth"]:
                current = line.strip("\n").split(" ")
                tth.append([
                    str(int(current[0]) - int(current[1])),
                    [current[1], str(int(current[1]) + int(current[2]) - 1)]
                ])
            if not searching["tth"]:
                searching["tth"] = True

        elif "humidity-to-location map:" in line or searching["htl"]:
            if line.startswith("\n"):
                searching["htl"] = False
                continue
            if searching["htl"]:
                current = line.strip("\n").split(" ")
                htl.append([
                    str(int(current[0]) - int(current[1])),
                    [current[1], str(int(current[1]) + int(current[2]) - 1)]
                ])
            if not searching["htl"]:
                searching["htl"] = True

inSeedRange(seeds)

# ---------

closestSeed = 0

# while True:
#     break

# for i in range(len(seedInfo)):
#     currentSeed = str(int(seedInfo[i][0]) - 1)
#     staticSeed = currentSeed
#     for j in range(int(seedInfo[i][1])):
#
#         print(staticSeed, "-", j)
#
#         currentSeed = str(int(currentSeed) + 1)
#         seed = str(int(currentSeed) + 1)
#
#         for o in sts:
#             if int(o[1][0]) <= int(seed) <= int(o[1][1]):
#                 seed = str(int(seed) + int(o[0]))
#                 break
#         for o in stf:
#             if int(o[1][0]) <= int(seed) <= int(o[1][1]):
#                 seed = str(int(seed) + int(o[0]))
#                 break
#         for o in ftw:
#             if int(o[1][0]) <= int(seed) <= int(o[1][1]):
#                 seed = str(int(seed) + int(o[0]))
#                 break
#         for o in wtl:
#             if int(o[1][0]) <= int(seed) <= int(o[1][1]):
#                 seed = str(int(seed) + int(o[0]))
#                 break
#         for o in ltt:
#             if int(o[1][0]) <= int(seed) <= int(o[1][1]):
#                 seed = str(int(seed) + int(o[0]))
#                 break
#         for o in tth:
#             if int(o[1][0]) <= int(seed) <= int(o[1][1]):
#                 seed = str(int(seed) + int(o[0]))
#                 break
#         for o in htl:
#             if int(o[1][0]) <= int(seed) <= int(o[1][1]):
#                 seed = str(int(seed) + int(o[0]))
#                 break
#
#         newSeeds.append(int(seed))

# print(closestSeed)
