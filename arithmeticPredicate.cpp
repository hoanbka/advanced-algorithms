
void removeSpace(string &s) {
	s.erase(remove(s.begin(), s.end(), ' '), s.end());
}

int priority(char c) {
	if (c == '*' || c == '/') return 2;
	if (c == '+' || c == '-') return 1;

	return 0;
}

queue<string> ToPostfix(string a) {
	stack<char> s;
	queue<string> p;

	for (int i = 0; i < a.size(); i++) {
		if (isdigit(a[i])) {
			p.push(string(1, a[i]));
		}
		else if (a[i] == '(' || a[i] == ')') {
			if (a[i] == '(') {
				s.push(a[i]);
			}
			else {
				char c = s.top(); s.pop();

				while (c != '(') {
					p.push(string(1, c));
					c = s.top();
					s.pop();
				}
			}
		}
		else {
			while (!s.empty()) {
				int cur = priority(a[i]),
					pre = priority(s.top());

				if (pre >= cur) {
					p.push(string(1, s.top()));
					s.pop();
				}
				else break;
			}

			s.push(a[i]);
		}
	}

	while (!s.empty()) {
		p.push(string(1, s.top()));
		s.pop();
	}

	return p;
}

float Calculate(string m) {
	stack<float> r;
	queue<string> p = ToPostfix(m);
    
	while (!p.empty()) {
		string s = p.front();
		p.pop();

		if (isdigit(s[0])) {
			r.push(stoi(s));
		}
		else {
			float a = r.top(); r.pop();
			float b = r.top(); r.pop();

			if (s == "*") r.push(b * a);
			else if (s == "/") r.push(b / a);
			else if (s == "+") r.push(b + a);
			else if (s == "-") r.push(b - a);
		}
	}

	return r.top();
}
bool arithmeticPredicate(auto p) {
    removeSpace(p);
    
    int x = 0;
    while (p[x] != '=') x++;

    string e1 = p.substr(0, x),
           e2 = p.substr(x + 1, p.size() - 1);
    
    return Calculate(e1) == Calculate(e2);
    cout << "_1111";
}
