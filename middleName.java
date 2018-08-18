boolean check(String s) {
		if(s.equals("")||s.equals(" ")) return false;
		if (s.charAt(0)==' ') s = s.substring(1, s.length());
		if (s.charAt(s.length()-1)==' ') s = s.substring(0, s.length()-1);
		if(s.contains(" ")) return false;
		char c = s.charAt(0);
		if (c < 'A' || c > 'Z')
			return false;
		for (int i = 1; i < s.length(); i++) {
			c = s.charAt(i);
			if (c < 'a' || c > 'z')
				return false;
		}
		return true;
	}

	List<Integer> find(String str, String findStr) {
		int lastIndex = 0;
		List<Integer> result = new ArrayList<Integer>();
		while (lastIndex != -1) {

			lastIndex = str.indexOf(findStr, lastIndex);

			if (lastIndex != -1) {
				result.add(lastIndex);
				lastIndex += 1;
			}
		}
		return result;
	}

	List<String> middleName(String firstName, String lastName, String para) {
		List<String> ls = new ArrayList<String>();
		int n = firstName.length(), m = lastName.length(), x, y;
		String tmp = "";
		List<Integer> a = find(para, firstName);
		List<Integer> b = find(para, lastName);
		for(int i: a) {
			for(int j: b) {
				if(i+n<j) {
					tmp = para.substring(i+n, j);
					if(check(tmp)) {
						ls.add(tmp.trim());
					}
				}
			}
		}
		return ls;
	}