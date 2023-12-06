searching = {"sts": False, "stf": False, "ftw": False, "wtl": False, "ltt": False, "tth": False, "htl": False}

sts = []
stf = []
ftw = []
wtl = []
ltt = []
tth = []
htl = []

with open("test.txt") as file:
    for line in file:
        if "seeds:" in line:
            seeds = line.split(":")[1].strip(" ").strip("\n").split(" ")

        elif "seed-to-soil map:" in line or searching["sts"]:
            if line.startswith("\n"):
                searching["sts"] = False
                continue
            if searching["sts"]:
                current = line.strip("\n").split(" ")
                sts.append([
                    [current[0], str(int(current[0]) + int(current[2]) - 1)],
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
                    [current[0], str(int(current[0]) + int(current[2]) - 1)],
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
                    [current[0], str(int(current[0]) + int(current[2]) - 1)],
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
                    [current[0], str(int(current[0]) + int(current[2]) - 1)],
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
                    [current[0], str(int(current[0]) + int(current[2]) - 1)],
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
                    [current[0], str(int(current[0]) + int(current[2]) - 1)],
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
                    [current[0], str(int(current[0]) + int(current[2]) - 1)],
                    [current[1], str(int(current[1]) + int(current[2]) - 1)]
                ])
            if not searching["htl"]:
                searching["htl"] = True

print(sts)
print(stf)
print(ftw)
print(wtl)
print(ltt)
print(tth)
print(htl)
